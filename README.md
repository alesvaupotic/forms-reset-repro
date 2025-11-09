## repro repo for forms remote functions

This branch demonstrates how a form-bound input type="date" breaks once you start typing into an input with valid prepopulated date.

If you start typing with <kbd>0</kbd>, to enter "01/01/2025", the whole input resets to empty while the locally-bound just waits for you to continue typing and eventually get back to valid date.

It then needs a whole new input sequence, you have to type <kbd>0</kbd> again to start populating the input correctly.
