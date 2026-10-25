import { site } from "@/lib/site";

// Floating WhatsApp / call / chat buttons, bottom-right on every page.
export function Dock() {
  return (
    <div className="dock">
      <a className="wa" href={site.whatsapp.general} target="_blank" rel="noopener" aria-label="WhatsApp KPU FOOD">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.06 24l1.68-6.16A11.87 11.87 0 0 1 .14 11.9C.14 5.33 5.48 0 12.05 0a11.82 11.82 0 0 1 8.41 3.49 11.8 11.8 0 0 1 3.48 8.42c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24zM6.6 20.2c1.68 1 3.28 1.6 5.44 1.6 5.45 0 9.9-4.43 9.9-9.89 0-5.46-4.43-9.9-9.89-9.9S2.15 6.45 2.15 11.9a9.85 9.85 0 0 0 1.51 5.26l-.99 3.62 3.93-.58zm10.9-5.7c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41z" />
        </svg>
      </a>
      <a className="ph" href={`tel:${site.phones[0].tel}`} aria-label="Call KPU FOOD">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
        </svg>
      </a>
      <a className="ch" href={site.chatUrl} target="_blank" rel="noopener" aria-label="Chat with KPU FOOD">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a9 9 0 0 0-9 9c0 1.9.6 3.6 1.6 5L3 22l6.2-1.5A9 9 0 1 0 12 2zm-4 8.2h8v1.6H8zm0-3h8v1.6H8zm0 6h5v1.6H8z" />
        </svg>
      </a>
    </div>
  );
}
