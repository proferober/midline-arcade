# MidLine

A MakeCode Arcade extension that draws a persistent horizontal line (1 pixel thick) at the middle of the screen.

## Usage

Paste the URL in `Advanced` → `Extensions`:

```
https://github.com/proferober/midline-arcade
```

## Blocks

- `show midline color [color]` — draws a line at y=60 across the full width (persistent)
- `show horizontal line at y [y] color [color]` — draws a line at any Y position (persistent)

## Example

Place this in `on start` to show a red line at the center:

```
show midline color 2
```

## License

MIT
