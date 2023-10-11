
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "var(--color-tertiary-50)",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #7EC8E3 
		"--color-primary-50": "236 247 251", // #ecf7fb
		"--color-primary-100": "229 244 249", // #e5f4f9
		"--color-primary-200": "223 241 248", // #dff1f8
		"--color-primary-300": "203 233 244", // #cbe9f4
		"--color-primary-400": "165 217 235", // #a5d9eb
		"--color-primary-500": "126 200 227", // #7EC8E3
		"--color-primary-600": "113 180 204", // #71b4cc
		"--color-primary-700": "95 150 170", // #5f96aa
		"--color-primary-800": "76 120 136", // #4c7888
		"--color-primary-900": "62 98 111", // #3e626f
		// secondary | #0E86D4 
		"--color-secondary-50": "219 237 249", // #dbedf9
		"--color-secondary-100": "207 231 246", // #cfe7f6
		"--color-secondary-200": "195 225 244", // #c3e1f4
		"--color-secondary-300": "159 207 238", // #9fcfee
		"--color-secondary-400": "86 170 225", // #56aae1
		"--color-secondary-500": "14 134 212", // #0E86D4
		"--color-secondary-600": "13 121 191", // #0d79bf
		"--color-secondary-700": "11 101 159", // #0b659f
		"--color-secondary-800": "8 80 127", // #08507f
		"--color-secondary-900": "7 66 104", // #074268
		// tertiary | #160b57 
		"--color-tertiary-50": "220 218 230", // #dcdae6
		"--color-tertiary-100": "208 206 221", // #d0cedd
		"--color-tertiary-200": "197 194 213", // #c5c2d5
		"--color-tertiary-300": "162 157 188", // #a29dbc
		"--color-tertiary-400": "92 84 137", // #5c5489
		"--color-tertiary-500": "22 11 87", // #160b57
		"--color-tertiary-600": "20 10 78", // #140a4e
		"--color-tertiary-700": "17 8 65", // #110841
		"--color-tertiary-800": "13 7 52", // #0d0734
		"--color-tertiary-900": "11 5 43", // #0b052b
		// success | #28c06e 
		"--color-success-50": "223 246 233", // #dff6e9
		"--color-success-100": "212 242 226", // #d4f2e2
		"--color-success-200": "201 239 219", // #c9efdb
		"--color-success-300": "169 230 197", // #a9e6c5
		"--color-success-400": "105 211 154", // #69d39a
		"--color-success-500": "40 192 110", // #28c06e
		"--color-success-600": "36 173 99", // #24ad63
		"--color-success-700": "30 144 83", // #1e9053
		"--color-success-800": "24 115 66", // #187342
		"--color-success-900": "20 94 54", // #145e36
		// warning | #bc2c2c 
		"--color-warning-50": "245 223 223", // #f5dfdf
		"--color-warning-100": "242 213 213", // #f2d5d5
		"--color-warning-200": "238 202 202", // #eecaca
		"--color-warning-300": "228 171 171", // #e4abab
		"--color-warning-400": "208 107 107", // #d06b6b
		"--color-warning-500": "188 44 44", // #bc2c2c
		"--color-warning-600": "169 40 40", // #a92828
		"--color-warning-700": "141 33 33", // #8d2121
		"--color-warning-800": "113 26 26", // #711a1a
		"--color-warning-900": "92 22 22", // #5c1616
		// error | #ffc61a 
		"--color-error-50": "255 246 221", // #fff6dd
		"--color-error-100": "255 244 209", // #fff4d1
		"--color-error-200": "255 241 198", // #fff1c6
		"--color-error-300": "255 232 163", // #ffe8a3
		"--color-error-400": "255 215 95", // #ffd75f
		"--color-error-500": "255 198 26", // #ffc61a
		"--color-error-600": "230 178 23", // #e6b217
		"--color-error-700": "191 149 20", // #bf9514
		"--color-error-800": "153 119 16", // #997710
		"--color-error-900": "125 97 13", // #7d610d
		// surface | #0a5c95 
		"--color-surface-50": "218 231 239", // #dae7ef
		"--color-surface-100": "206 222 234", // #cedeea
		"--color-surface-200": "194 214 229", // #c2d6e5
		"--color-surface-300": "157 190 213", // #9dbed5
		"--color-surface-400": "84 141 181", // #548db5
		"--color-surface-500": "10 92 149", // #0a5c95
		"--color-surface-600": "9 83 134", // #095386
		"--color-surface-700": "8 69 112", // #084570
		"--color-surface-800": "6 55 89", // #063759
		"--color-surface-900": "5 45 73", // #052d49
		
	}
}