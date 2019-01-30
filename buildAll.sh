# !/bin/bash
echo "USAGE: ./buildAll.sh"

python make.py wechat wasm
python make.py worker wasm
python make.py web wasm
python make.py node wasm

