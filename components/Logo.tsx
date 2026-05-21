export function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer glow ring */}
      <circle cx="20" cy="20" r="19.5" style={{ stroke: 'var(--gold)', strokeWidth: 0.5, opacity: 0.4 }} />
      {/* Background circle */}
      <circle cx="20" cy="20" r="18" style={{ fill: 'var(--green-deep)', stroke: 'var(--gold)', strokeWidth: 1.2 }} />

      {/*
        Crescent: outer circle CW (center 16,20 r=10) minus inner circle CCW (center 20,18 r=8)
        fill-rule nonzero: inner CCW path subtracts from outer CW path → crescent shape
      */}
      <path
        fillRule="nonzero"
        style={{ fill: 'var(--gold)' }}
        d="
          M16,10
          A10,10,0,1,1,16,30
          A10,10,0,1,1,16,10
          Z
          M20,10
          A8,8,0,1,0,20,26
          A8,8,0,1,0,20,10
          Z
        "
      />

      {/* 5-point star at upper right of crescent — center (29,13) r_out=4 r_in=1.65 */}
      <polygon
        style={{ fill: 'var(--gold)' }}
        points="
          29,9
          29.97,12.04
          33.14,12.04
          30.59,13.91
          31.56,16.95
          29,15.08
          26.44,16.95
          27.41,13.91
          24.86,12.04
          28.03,12.04
        "
      />

      {/* Subtle inner border for depth */}
      <circle cx="20" cy="20" r="18" style={{ stroke: 'rgba(255,255,255,0.06)', strokeWidth: 1, fill: 'none' }} />
    </svg>
  );
}
