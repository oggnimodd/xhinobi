<p align="center">
 <img src="https://raw.githubusercontent.com/oggnimodd/xhinobi/main/images/logo-rounded.png" width="175"/>
</p>

# xhinobi
## TypeScript version of https://github.com/oggnimodd/xhinobi-go

xhinobi simplifies the process of aggregating text content from multiple files without the need to manually open and copy each file individually. Instead of laboriously opening each file and copying its content, Xhinobi streamlines this task by allowing users to gather text from multiple files automatically using command-line instructions. Xhinobi is a useful tool when you need to copy a large amount of text content from multiple files for use in a language model like ChatGPT or Phind. This is especially helpful when you're coding and need to provide the model with a large amount of context or data.

<img src="https://raw.githubusercontent.com/oggnimodd/xhinobi/main/images/demo.gif" />

## Prerequisites
- Bun : `curl -fsSL https://bun.sh/install | bash`
- On ubuntu you need xsel : `sudo apt install xsel`

## Installation
```bash
npm install -g xhinobi
```

## Usage
It is designed to work with other command-line tools like `fdfind` and `fzf`. Here is an example of how to use it:

```
fdfind --type f --exclude node_modules,dist | fzf -m | xhinobi
```

In this example, `fdfind` is used to find all files in the current directory excluding node_modules and dist. The output is piped to `fzf` for multi-selection and then piped to `xhinobi`. `xhinobi` will combine all the content from those files, minify them, and copy them to the clipboard.

## Options
xhinobi supports several options that can be used to customize its behavior:

- `-n` or `--prependFileName`: Prepend the file name before the content. 
- `-m` or `--minify`: Minify the output.
