// Renders structured content blocks from diagnoses.js
// Supports **bold** and `dose` (backtick) markers in item strings.
// Markers nest: a bold span may contain dose chips, so a token's inner text
// is parsed again rather than emitted raw.

function parseItem(text) {
  // Split on **bold** and `dose` markers.
  // Declared here, not at module scope — recursion would clobber a shared lastIndex.
  const parts = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let match;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      parts.push({ type: "text", val: text.slice(last, match.index) });
    }
    const tok = match[0];
    if (tok.startsWith("**")) {
      parts.push({ type: "bold", ...parseInner(tok.slice(2, -2)) });
    } else {
      parts.push({ type: "dose", ...parseInner(tok.slice(1, -1)) });
    }
    last = match.index + tok.length;
  }
  if (last < text.length) parts.push({ type: "text", val: text.slice(last) });
  return parts;
}

// Inner text of a marker. Recurses only when the inner text actually holds
// nested markers, so unnested spans keep rendering as a plain text child.
// Terminates: inner text is always shorter than the token that contained it.
function parseInner(inner) {
  const children = parseItem(inner);
  const plain = children.length === 1 && children[0].type === "text";
  return plain ? { val: inner } : { children };
}

function renderParts(parts) {
  return parts.map((p, i) => {
    const body = p.children ? renderParts(p.children) : p.val;
    if (p.type === "bold") return <strong key={i}>{body}</strong>;
    if (p.type === "dose") return <span key={i} className="dose">{body}</span>;
    return <span key={i}>{body}</span>;
  });
}

function RichText({ text }) {
  return <>{renderParts(parseItem(text))}</>;
}

export default function ContentRenderer({ sections }) {
  if (!sections?.length) return null;
  return (
    <div className="prose-clinical">
      {sections.map((sec, i) => (
        <div key={i}>
          <h3>{sec.heading}</h3>
          <ul>
            {sec.items.map((item, j) => (
              <li key={j}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
