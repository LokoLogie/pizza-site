export default function ItalyMap({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 185 315"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Map of Italy"
    >
      {/* Italian peninsula */}
      <path
        d="
          M 32 26
          C 65 16 105 12 142 18
          C 150 20 153 27 151 39
          C 149 50 143 60 139 73
          C 135 86 133 100 134 114
          C 135 128 138 141 141 153
          C 144 165 147 175 149 183
          C 151 189 153 193 156 193
          C 161 192 163 199 158 208
          C 153 216 144 217 137 212
          C 130 207 126 199 123 192
          C 120 185 119 179 117 177
          C 115 175 112 177 109 183
          C 106 189 106 199 107 211
          C 108 223 110 236 107 247
          C 104 256 97 259 90 256
          C 83 253 78 242 73 228
          C 68 214 64 199 59 184
          C 54 169 49 153 45 138
          C 41 123 38 108 35 93
          C 32 78 30 63 30 48
          C 30 38 31 30 32 26
          Z
        "
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Sicily */}
      <path
        d="
          M 38 273
          C 52 264 70 260 85 264
          C 97 267 100 277 90 286
          C 80 293 59 293 45 284
          C 34 277 27 275 38 273
          Z
        "
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Sardinia */}
      <path
        d="
          M 8 148
          C 10 138 17 133 22 136
          C 27 139 28 149 27 161
          C 26 172 20 178 15 174
          C 10 170 6 158 8 148
          Z
        "
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
