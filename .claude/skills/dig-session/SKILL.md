---
name: dig-session
description: Extract images, diagrams, conversations from session JSONL. The actual jq commands that work.
---

# /dig-session [images|diagrams|around "keyword"] [session-id]

Find the JSONL. Default = current session. Session JSONL path pattern:
`~/.claude/projects/-home-nat-Code-github-com-*/<session-id>*.jsonl`

## images

List all images with context:
```bash
jq -c 'select(.type == "user") | select([.message.content[] | select(.type == "image")] | length > 0) | {line: input_line_number, ts: .timestamp, text: ([.message.content[] | select(.type == "text") | .text[:150]] | join(" "))}' "$JSONL" 2>/dev/null
```

Extract image N from line L:
```bash
sed -n "${L}p" "$JSONL" | jq -r "[.message.content[] | select(.type == \"image\")][$N].source.data" | base64 -d > /tmp/img-L${L}.png
```

Then `Read` the png to show it.

Also check image cache: `~/.claude/image-cache/<session-id>/`

## diagrams

Find ASCII art in assistant messages:
```bash
jq -c 'select(.type == "assistant") | select([.message.content[]? | select(.type == "text") | select(.text | test("[┌┐└┘│─├┤┬┴┼╭╮╰╯╔╗╚╝║═]"))] | length > 0) | {line: input_line_number, ts: .timestamp, preview: ([.message.content[]? | select(.type == "text") | .text[:80]] | join(" "))}' "$JSONL" 2>/dev/null
```

Get full text of diagram at line L:
```bash
sed -n '${L}p' "$JSONL" | jq -r '[.message.content[]? | select(.type == "text") | .text] | join("")'
```

## around "keyword"

```bash
jq -c "select(.type == \"user\" or .type == \"assistant\") | select([.message.content[]? | select(.type == \"text\") | select(.text | test(\"$KEYWORD\"; \"i\"))] | length > 0) | {line: input_line_number, type, ts: .timestamp, text: ([.message.content[]? | select(.type == \"text\") | .text[:200]] | join(\" \"))}" "$JSONL" 2>/dev/null
```

Context around a line:
```bash
for line in $(seq $((TARGET-3)) $((TARGET+5))); do
  sed -n "${line}p" "$JSONL" | jq -c '{line: '$line', type, text: (if .type == "user" then ([.message.content[] | select(.type == "text") | .text[:200]] | join(" ")) elif .type == "assistant" then ([.message.content[]? | select(.type == "text") | .text[:200]] | join(" ")) else .type end)}' 2>/dev/null
done
```

Run these commands directly. Show results as a table. Offer to view/extract specific items.
