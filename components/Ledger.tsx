export function Ledger({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="ledger">
      {rows.map((r) => (
        <div key={r.label}>
          <b>{r.label}</b>
          <i />
          <em>{r.value}</em>
        </div>
      ))}
    </div>
  );
}
