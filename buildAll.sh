# !/bin/bash
echo "USAGE: ./buildAll.sh"

python3 make.py wechat wasm
python3 make.py worker wasm
python3 make.py web wasm
python3 make.py node wasm

