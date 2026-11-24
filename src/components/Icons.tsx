const paths = {
  arrow: "M4 12h16M14 6l6 6-6 6",
  arrowUR: "M7 17 17 7M8 7h9v9",
  plus: "M12 5v14M5 12h14",
  close: "M6 6l12 12M18 6 6 18",
  menu: "M3 8h18M3 16h18",
  check: "m5 12.5 4.5 4.5L19 7.5",
  x: "M7 7l10 10M17 7 7 17",
  pin: "M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  phone: "M6.6 3.5 9.3 4l1.2 4-2 1.6a13 13 0 0 0 5.9 5.9l1.6-2 4 1.2.5 2.7a2 2 0 0 1-2 2.1A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2.1-2Z",
  instagram: "M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm4.5 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5-9.2v.01",
  whatsapp:
    "M4 20l1.2-4A8.5 8.5 0 1 1 8.3 19L4 20Zm5.2-11.6c-.3 0-.7.1-.9.5-.3.5-.7 1.2-.3 2.3.6 1.6 2.4 3.6 4.6 4.3 1 .3 1.7 0 2.1-.4.3-.3.4-.8.3-1l-1.6-.8c-.2-.1-.4 0-.5.1l-.6.7c-.1.1-.3.2-.5.1a5.6 5.6 0 0 1-2.6-2.4c-.1-.2 0-.3.1-.4l.5-.6c.1-.2.1-.4 0-.5l-.7-1.6c-.1-.2-.3-.3-.5-.3h-.4Z",
  camera: "M4 8h3l1.5-2h7L17 8h3v11H4zM12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
  car: "M4 16V11l2-5h12l2 5v5M3 16h18M7 19.5a1.5 1.5 0 1 0 0-.1M17 19.5a1.5 1.5 0 1 0 0-.1M4.5 11h15",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  truck: "M2.5 6h11v10h-11zM13.5 9.5h4.2l3.3 3.5V16h-7.5M6.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  scissors: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2.1-13.9L20 19M8.1 16.9 20 5",
  shield: "M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6zM9 12l2 2 4-4",
  drag: "M9 7 4 12l5 5M15 7l5 5-5 5",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4.5l3 2",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 20, stroke = 1.5, className }: { name: IconName; size?: number; stroke?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
