"""
Check that every quote in SOURCES.md appears in the saved source pages.

    python3 tools/check_quotes.py path/to/snapshots

The snapshot folder holds plain text copies of the source pages (one .txt file per
page, any folder depth). Matching ignores case, whitespace, curly versus straight
quotes, PDF ligatures and words hyphenated across PDF line breaks, because the
whitepaper PDF drops spaces between words.
Exit code 1 if any quote is missing.
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent


def norm(s):
    s = re.sub(r'(\w)-\n(\w)', r'\1\2', s)  # rejoin words the PDF hyphenated across a line break
    s = s.replace('ﬁ', 'fi').replace('ﬂ', 'fl')
    for a, b in (('‘', "'"), ('’', "'"), ('“', '"'), ('”', '"'), (' ', ' '), ('​', '')):
        s = s.replace(a, b)
    return re.sub(r'\s+', '', s).lower()


def main():
    snap = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else ROOT / 'verification' / 'snapshots')
    files = {p: norm(p.read_text(encoding='utf-8', errors='ignore')) for p in snap.rglob('*.txt')}
    if not files:
        print('No snapshot .txt files found in', snap)
        return 2
    md = (ROOT / 'SOURCES.md').read_text(encoding='utf-8')
    section = '?'
    total = missing = 0
    for line in md.splitlines():
        if line.startswith('## '):
            section = line[3:].strip()
        for q in re.findall(r'“(.+?)”', line):
            total += 1
            n = norm(q)
            hits = [p.name for p, t in files.items() if n in t]
            if hits:
                print(f'ok    [{section[:28]}] {q[:70]}  ->  {hits[0]}')
            else:
                missing += 1
                print(f'MISS  [{section[:28]}] {q}')
    print(f'\n{total} quotes checked, {total - missing} found, {missing} missing.')
    return 1 if missing else 0


if __name__ == '__main__':
    sys.exit(main())
