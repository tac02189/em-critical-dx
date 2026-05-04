// Renders structured content blocks from diagnoses.js
// Supports **bold** and `dose` (backtick) markers in item strings

function parseItem(text) {
  // Split on **bold** and `dose` markers
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
      parts.push({ type: "bold", val: tok.slice(2, -2) });
    } else {
      parts.push({ type: "dose", val: tok.slice(1, -1) });
    }
    last = match.index + tok.length;
  }
  if (last < text.length) parts.push({ type: "text", val: text.slice(last) });
  return parts;
}

function RichText({ text }) {
  const parts = parseItem(text);
  return (
    <>
      {parts.map((p, i) => {
        if (p.type === "bold") return <strong key={i}>{p.val}</strong>;
        if (p.type === "dose") return <span key={i} className="dose">{p.val}</span>;
        return <span key={i}>{p.val}</span>;
      })}
    </>
  );
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
