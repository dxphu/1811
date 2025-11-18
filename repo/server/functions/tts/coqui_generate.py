import sys
import os
from TTS.api import TTS

def main():
    if len(sys.argv) < 3:
        print('Usage: python coqui_generate.py <csv_path> <out_dir>')
        sys.exit(1)
    csv_path = sys.argv[1]
    out_dir = sys.argv[2]
    if not os.path.exists(csv_path):
        print('CSV not found:', csv_path)
        sys.exit(1)
    os.makedirs(out_dir, exist_ok=True)

    # choose a model; this is a general-purpose English model name — change if needed
    model_name = TTS.list_models()[0]
    tts = TTS(model_name)

    import csv
    with open(csv_path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            word = (row.get('word') or '').strip()
            if not word:
                continue
            out_file = os.path.join(out_dir, f"{word}.mp3")
            print('Synthesis:', word)
            tts.tts_to_file(text=word, file_path=out_file)

if __name__ == '__main__':
    main()
