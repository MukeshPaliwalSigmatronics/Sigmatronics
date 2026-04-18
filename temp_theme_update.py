from pathlib import Path
root = Path(r'C:\Users\Mukesh\Desktop\Sigmatonicswebsite')
files = [
    root / 'components' / 'Navbar.tsx',
    root / 'components' / 'Footer.tsx',
    root / 'app' / 'page.tsx',
    root / 'app' / 'about' / 'page.tsx',
    root / 'app' / 'services' / 'page.tsx',
    root / 'app' / 'solutions' / 'page.tsx',
    root / 'app' / 'contact' / 'page.tsx',
    root / 'app' / 'products' / 'page.tsx'
]
replacements = {
    'bg-gray-800/30': 'bg-slate-100/80',
    'bg-gray-800/50': 'bg-white/90',
    'bg-gray-700': 'bg-slate-100',
    'border-gray-700': 'border-slate-200',
    'border-gray-600': 'border-slate-300',
    'text-gray-300': 'text-slate-600',
    'text-gray-400': 'text-slate-500',
    'text-blue-400': 'text-[#0b3d91]',
    'hover:text-blue-400': 'hover:text-[#0b3d91]',
    'bg-blue-600': 'bg-[#0b3d91]',
    'hover:bg-blue-700': 'hover:bg-[#0a3576]',
    'hover:bg-gray-800': 'hover:bg-slate-200',
    'hover:bg-gray-700': 'hover:bg-slate-200',
    'bg-gray-900/90': 'bg-white/95',
    'bg-gray-900': 'bg-slate-50',
    'bg-gray-800/20': 'bg-slate-200/40',
    'bg-gray-800/50 backdrop-blur-sm': 'bg-white/90 backdrop-blur-sm',
    'bg-gray-800/50 p-8': 'bg-white/90 p-8',
    'bg-gray-800/50 p-6': 'bg-white/90 p-6',
    'bg-gray-800/50 p-4': 'bg-white/90 p-4',
    'bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700': 'bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-slate-200',
    'bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700': 'bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-slate-200',
    'bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700': 'bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-slate-200',
    'bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-200': 'bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-slate-200 hover:border-[#0b3d91] transition-colors duration-200',
    'bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-200': 'bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-slate-200 hover:border-[#0b3d91] transition-colors duration-200',
    'bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700': 'bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-slate-200',
    'bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700': 'bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-slate-200',
    'bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500': 'bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-slate-200 hover:border-[#0b3d91]',
    'className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-md mt-2"': 'className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-md mt-2 border border-slate-200 shadow-sm"',
    'className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md transition-colors duration-200"': 'className="block px-3 py-2 text-slate-700 hover:text-[#0b3d91] hover:bg-slate-100 rounded-md transition-colors duration-200"'
}
for file in files:
    if not file.exists():
        print('Missing', file)
        continue
    text = file.read_text(encoding='utf-8')
    updated = text
    for old, new in replacements.items():
        updated = updated.replace(old, new)
    if updated != text:
        file.write_text(updated, encoding='utf-8')
        print('Updated', file.name)
    else:
        print('No changes for', file.name)
