"--------------------------------------------------------------
" Name:         tether
" Description:  color scheme by tether
"--------------------------------------------------------------

"--------------------------------------------------------------
" Sets background color to dark
"--------------------------------------------------------------
set background=dark

"--------------------------------------------------------------
" Clear previous settings
"--------------------------------------------------------------
hi clear

"--------------------------------------------------------------
" Set the name of this colorscheme to tether
"--------------------------------------------------------------
let g:colors_name = 'tether'

"--------------------------------------------------------------
" Colors of marked files
"--------------------------------------------------------------
hi! link netrwMarkFile Pmenu

"--------------------------------------------------------------
" Colors of the inbuilt vim terminal
"--------------------------------------------------------------
hi! link Terminal Normal

"--------------------------------------------------------------
" Colors of search results under cursorline
"--------------------------------------------------------------
hi! link CurSearch Search

"--------------------------------------------------------------
" Colors of folded text under cursorline
"--------------------------------------------------------------
hi! link CursorLineFold CursorLine

"--------------------------------------------------------------
" Colors of signs under cursorline
"--------------------------------------------------------------
hi! link CursorLineSign CursorLine

"--------------------------------------------------------------
" Colors of popup notification
"--------------------------------------------------------------
hi! link PopupNotification Todo

"--------------------------------------------------------------
" Colors of column where signs are displayed
"--------------------------------------------------------------
hi! link SignColumn Folded

"--------------------------------------------------------------
" Colors of fold column
"--------------------------------------------------------------
hi! link FoldColumn Folded

"--------------------------------------------------------------
" Colors of the default vim window
"--------------------------------------------------------------
hi Normal ctermfg=15 ctermbg=0 cterm=NONE

"--------------------------------------------------------------
" Colors for unrecognized words with spellcheck
"--------------------------------------------------------------
hi SpellBad ctermfg=5 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors for uncapitalized words with spellcheck
"--------------------------------------------------------------
hi SpellCap ctermfg=2 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors for rare words with spellcheck
"--------------------------------------------------------------
hi SpellRare ctermfg=4 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors for HTML links etc.
"--------------------------------------------------------------
hi Underlined ctermfg=4 ctermbg=0 cterm=bold,underline

"--------------------------------------------------------------
" Colors for wrongly spelled words
"--------------------------------------------------------------
hi SpellLocal ctermfg=1 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of the notification for the command window
"--------------------------------------------------------------
hi Todo ctermfg=15 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of bracket parent
"--------------------------------------------------------------
hi MatchParen ctermfg=15 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of the wild menu used for tab completions
"--------------------------------------------------------------
hi WildMenu ctermfg=15 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of the option flags used with commands
"--------------------------------------------------------------
hi Special ctermfg=5 ctermbg=NONE cterm=NONE

"--------------------------------------------------------------
" Colors of warning messages under statusline e.g **warning** in netrw
"--------------------------------------------------------------
hi WarningMsg ctermfg=1 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of search results
"--------------------------------------------------------------
hi Search ctermfg=3 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of search prompts as its being typed
"--------------------------------------------------------------
hi IncSearch ctermfg=3 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of error highlight
"--------------------------------------------------------------
hi Error ctermfg=1 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of the tab completion menu
"--------------------------------------------------------------
hi Pmenu ctermfg=15 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of the selector for the tab completion menu
"--------------------------------------------------------------
hi PmenuSel ctermfg=15 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Color of the scroll bar background in tab completion menu
"--------------------------------------------------------------
hi PmenuSbar ctermfg=14 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Color of the scroll bar bar in tab completion menu
"--------------------------------------------------------------
hi PmenuThumb ctermfg=NONE ctermbg=7 cterm=NONE

"--------------------------------------------------------------
" Colors of error messages e.g when no search pattern is found
"--------------------------------------------------------------
hi ErrorMsg ctermfg=1 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of the buffer number in tabline
"--------------------------------------------------------------
hi Title ctermfg=15 ctermbg=NONE cterm=bold

"--------------------------------------------------------------
" Colors of the added lines in diffmode
"--------------------------------------------------------------
hi diffAdd ctermfg=2 ctermbg=NONE cterm=bold

"--------------------------------------------------------------
" Colors of the removed lines in diffmode
"--------------------------------------------------------------
hi diffDelete ctermfg=1 ctermbg=NONE cterm=bold

"--------------------------------------------------------------
" Colors of the changed lines in diffmode
"--------------------------------------------------------------
hi diffChange ctermfg=5 ctermbg=NONE cterm=bold

"--------------------------------------------------------------
" Colors of the changed text on changed lines in diffmode
"--------------------------------------------------------------
hi diffText ctermfg=1 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of divider in vertical mode
"--------------------------------------------------------------
hi VertSplit ctermfg=15 ctermbg=NONE cterm=bold

"--------------------------------------------------------------
" Colors of strings
"--------------------------------------------------------------
hi String ctermfg=2 ctermbg=NONE cterm=NONE

"--------------------------------------------------------------
" Colors of constants
"--------------------------------------------------------------
hi Constant ctermfg=1 ctermbg=NONE cterm=NONE

"--------------------------------------------------------------
" Colors of type definitions
"--------------------------------------------------------------
hi Type ctermfg=14 ctermbg=NONE cterm=NONE

"--------------------------------------------------------------
" Colors of command statements
"--------------------------------------------------------------
hi Statement ctermfg=3 ctermbg=NONE cterm=NONE

"--------------------------------------------------------------
" Colors of the current tab indicator
"--------------------------------------------------------------
hi TabLine ctermfg=15 ctermbg=7 cterm=bold

"--------------------------------------------------------------
" Colors of the tab line
"--------------------------------------------------------------
hi TabLineFill ctermfg=NONE ctermbg=7 cterm=NONE

"--------------------------------------------------------------
" Colors of active tab indicator/label
"--------------------------------------------------------------
hi TabLineSel ctermfg=15 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors for visual highlighter
"--------------------------------------------------------------
hi visual ctermfg=NONE ctermbg=NONE cterm=bold,inverse

"--------------------------------------------------------------
" Colors for commented text
"--------------------------------------------------------------
hi comment ctermfg=242 ctermbg=NONE cterm=NONE

"--------------------------------------------------------------
" Color of the popup messages under the statusline
"--------------------------------------------------------------
hi MessageWindow ctermfg=15 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors of the status line
"--------------------------------------------------------------
hi StatusLine ctermfg=15 ctermbg=7 cterm=bold

"--------------------------------------------------------------
" Colors of the inactive status line
"--------------------------------------------------------------
hi StatuslineNC ctermfg=15 ctermbg=7 cterm=NONE

"--------------------------------------------------------------
" Colors of the active vim terminal window
"--------------------------------------------------------------
hi StatusLineTerm ctermfg=15 ctermbg=7 cterm=bold

"--------------------------------------------------------------
" Colors of inactive vim terminal window
"--------------------------------------------------------------
hi StatuslineTermNC ctermfg=15 ctermbg=7 cterm=NONE

"--------------------------------------------------------------
" Colors for number column on cursor line
"--------------------------------------------------------------
hi CursorLineNr ctermfg=15 ctermbg=7 cterm=bold

"--------------------------------------------------------------
" Colors of the line numbers
"--------------------------------------------------------------
hi LineNr ctermfg=238 ctermbg=NONE cterm=NONE

"--------------------------------------------------------------
" Colors for the active mode, visual or insert
"--------------------------------------------------------------
hi ModeMsg ctermfg=15 ctermbg=0 cterm=bold,inverse

"--------------------------------------------------------------
" Colors for more-message
"--------------------------------------------------------------
hi MoreMsg ctermfg=2 ctermbg=NONE cterm=bold

"--------------------------------------------------------------
" Colors for the 'press ENTER or type command to continue'
"--------------------------------------------------------------
hi Question ctermfg=2 ctermbg=NONE cterm=bold

"--------------------------------------------------------------
" Colors of folders in netrw
"--------------------------------------------------------------
hi Directory ctermfg=4 ctermbg=NONE cterm=bold

"--------------------------------------------------------------
" Color of operators for commands e.g >
"--------------------------------------------------------------
hi Operator ctermfg=3 ctermbg=NONE cterm=NONE

"--------------------------------------------------------------
" Colors of the ~ and background at the end of each buffer
"--------------------------------------------------------------
hi EndOfBuffer ctermfg=236 ctermbg=0 cterm=bold

"--------------------------------------------------------------
" Colors for cursor line
"--------------------------------------------------------------
hi CursorLine ctermfg=NONE ctermbg=7 cterm=NONE

"--------------------------------------------------------------
" Colors for vim markers, eol, preceed
"--------------------------------------------------------------
hi NonText ctermfg=236 ctermbg=NONE cterm=NONE

"--------------------------------------------------------------
" Colors for indentation markers
"--------------------------------------------------------------
hi SpecialKey ctermfg=236 ctermbg=NONE cterm=NONE

"--------------------------------------------------------------
" Colors for variable identifiers
"--------------------------------------------------------------
hi Identifier ctermfg=4 ctermbg=NONE cterm=bold

"--------------------------------------------------------------
" Colors for preprocessor
"--------------------------------------------------------------
hi PreProc ctermfg=4 ctermbg=NONE cterm=bold

"--------------------------------------------------------------
" Colors for folded text
"--------------------------------------------------------------
hi Folded ctermfg=14 ctermbg=NONE cterm=bold
