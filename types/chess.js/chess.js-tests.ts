import * as chessjs from 'chess.js';

const fen = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1';

// --- constructors --- \\

// $ExpectType ChessInstance
chessjs.Chess(fen);

// $ExpectType ChessInstance
const chess = new chessjs.Chess();

// $ExpectType "w"
chessjs.WHITE;

// $ExpectType "b"
chessjs.BLACK;

// $ExpectType "p"
chessjs.PAWN;

// $ExpectType "n"
chessjs.KNIGHT;

// $ExpectType "b"
chessjs.BISHOP;

// $ExpectType "r"
chessjs.ROOK;

// $ExpectType "q"
chessjs.QUEEN;

// $ExpectType "k"
chessjs.KING;

// $ExpectType number
chessjs.EMPTY;

// $ExpectType ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7", "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
chessjs.SQUARES;

// $ExpectType { NORMAL: "n"; CAPTURE: "c"; BIG_PAWN: "b"; EP_CAPTURE: "e"; PROMOTION: "p"; KSIDE_CASTLE: "k"; QSIDE_CASTLE: "q"; }
chessjs.FLAGS;

// $ExpectType void
chess.reset();

// $ExpectType boolean
chess.load(fen);

// -- moves -- \\

// $ExpectType Move[]
chess.moves({ verbose: true });

// $ExpectType string[]
chess.moves({ verbose: false });

// $ExpectType string[]
chess.moves({ legal: false });

// $ExpectType string[]
chess.moves({ legal: true });

// $ExpectType string[]
chess.moves({ piece: 'n' });

// $ExpectType string[]
chess.moves({ square: 'b1', piece: 'n' });

// $ExpectType Move[]
chess.moves({ square: 'b1', piece: 'n', verbose: true });

// $ExpectType Move[]
chess.moves({ square: 'e2', verbose: true });

// $ExpectType string[]
chess.moves({ square: 'e2', verbose: false });

// $ExpectType string[]
chess.moves({ square: 'e2' });

// $ExpectType string[]
chess.moves({});

// $ExpectType string[]
chess.moves();

// $ExpectType boolean
chess.in_check();

// $ExpectType boolean
chess.in_checkmate();

// $ExpectType boolean
chess.in_stalemate();

// $ExpectType boolean
chess.in_draw();

// $ExpectType boolean
chess.insufficient_material();

// $ExpectType boolean
chess.in_threefold_repetition();

// $ExpectType boolean
chess.game_over();

// $ExpectType { valid: boolean; error_number: number; error: string; }
chess.validate_fen(fen);

// $ExpectType string
chess.fen();

// --- pgn --- \\

// $ExpectType string
chess.pgn({ max_width: 80, newline_char: '\n' });

// $ExpectType string
chess.pgn({ max_width: 120 });

// $ExpectType string
chess.pgn({ newline_char: '\r\n' });

// $ExpectType string
chess.pgn({});

// $ExpectType string
const pgn = chess.pgn();

// --- load_pgn --- \\

// $ExpectType boolean
chess.load_pgn(pgn, { newline_char: '\n', sloppy: true });

// $ExpectType boolean
chess.load_pgn(pgn, { newline_char: '\r\n' });

// $ExpectType boolean
chess.load_pgn(pgn, { sloppy: true });

// $ExpectType boolean
chess.load_pgn(pgn, {});

// $ExpectType boolean
chess.load_pgn(pgn);

// $ExpectType { [key: string]: string | undefined; }
chess.header('White', 'Morphy', 'Black', 'Anderssen', 'Date', '1858-??-??');

// $ExpectType string
chess.ascii();

// $ExpectType PieceColor
chess.turn();

// --- move --- \\

// $ExpectType Move | null
chess.move('e3');

// $ExpectType Move | null
chess.move('e3', {});

// $ExpectType Move | null
chess.move('e3', { sloppy: true });

// $ExpectType Move | null
chess.move('e3', { sloppy: false });

// $ExpectType Move | null
chess.move({ from: 'e2', to: 'e3' });

// $ExpectType Move | null
chess.move({ from: 'e2', to: 'e3', promotion: 'q' });

// $ExpectType Move | null
chess.move({ from: 'e2', to: 'e3' });

// $ExpectType Move | null
chess.move({ from: 'e2', to: 'e3', promotion: 'q' });

// $ExpectType Move | null
chess.undo();

// $ExpectType void
chess.clear();

// $ExpectType boolean
chess.put({ type: 'p', color: 'b' }, 'a5');

// $ExpectType Piece | null
chess.get('a5');

// $ExpectType Piece | null
chess.remove('a5');

// $ExpectType SquareColor
chess.square_color('a5');

// $ExpectType SquareColor | null
chess.square_color('invalid square string');

// --- history --- \\

// $ExpectType string[]
chess.history();

// $ExpectType string[]
chess.history({});

// $ExpectType string[]
chess.history({ verbose: false });

// $ExpectType Move[]
chess.history({ verbose: true });

// $ExpectType ({ type: PieceType; color: PieceColor; square: Square; } | null)[][]
chess.board();

// --- comments --- \\

// $ExpectType void
chess.set_comment('comment');

// $ExpectType string | undefined
chess.get_comment();

// $ExpectType Comment[]
chess.get_comments();

// $ExpectType string | undefined
chess.delete_comment();

// $ExpectType Comment[]
chess.delete_comments();
