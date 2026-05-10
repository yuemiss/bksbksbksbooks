import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Book } from "../data/books";
import { useState } from "react";

interface BookDetailProps {
	book: Book;
	onClose: () => void;
}

export default function BookDetail({ book, onClose }: BookDetailProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	return (
		<div className="fixed inset-0 z-[100] bg-black text-white overflow-y-auto">
			<div className="max-w-[1440px] mx-auto p-6 flex justify-between items-start">
				<div className="text-xs uppercase tracking-widest text-gray-500 flex items-center gap-2">
					<button
						onClick={onClose}
						className="hover:text-white transition-colors flex items-center gap-1"
					>
						<ChevronLeft size={14} strokeWidth={2} />
						Inventory
					</button>
					<span>/</span>
					<span className="text-white truncate max-w-[200px] md:max-w-md">
						{book.name}
					</span>
				</div>
				<button
					onClick={onClose}
					className="hover:opacity-70 transition-opacity"
				>
					<X size={24} strokeWidth={1.5} />
				</button>
			</div>

			<div className="max-w-[1440px] mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
				<div className="relative group">
					<div className="aspect-[3/4] bg-neutral-900 flex items-center justify-center overflow-hidden">
						<img
							src={book.images[currentImageIndex]}
							alt={book.name}
							className="w-full h-full object-cover"
						/>
					</div>

					{book.images.length > 1 && (
						<>
							<button
								onClick={() =>
									setCurrentImageIndex((prev) =>
										prev > 0 ? prev - 1 : book.images.length - 1,
									)
								}
								className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
							>
								<ChevronLeft size={24} strokeWidth={1.5} />
							</button>
							<button
								onClick={() =>
									setCurrentImageIndex((prev) =>
										prev < book.images.length - 1 ? prev + 1 : 0,
									)
								}
								className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
							>
								<ChevronRight size={24} strokeWidth={1.5} />
							</button>

							<div className="absolute bottom-4 right-4 text-[10px] tracking-widest text-gray-400">
								{currentImageIndex + 1} / {book.images.length}
							</div>
						</>
					)}

					<div className="mt-8 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
						<button className="p-1 border border-white/20 hover:border-white transition-colors">
							<ChevronLeft size={16} strokeWidth={1.5} />
						</button>
						{book.images.map((img, idx) => (
							<button
								key={idx}
								onClick={() => setCurrentImageIndex(idx)}
								className={`flex-shrink-0 w-16 h-20 border transition-colors ${idx === currentImageIndex ? "border-white" : "border-transparent"}`}
							>
								<img
									src={img}
									alt=""
									className="w-full h-full object-cover opacity-80"
								/>
							</button>
						))}
						<button className="p-1 border border-white/20 hover:border-white transition-colors">
							<ChevronRight size={16} strokeWidth={1.5} />
						</button>
					</div>
				</div>

				<div className="mt-8 md:mt-24 space-y-6">
					<h1 className="text-3xl font-medium tracking-tight leading-tight">
						{book.name}
					</h1>
					<p className="text-lg text-gray-300 font-light max-w-sm whitespace-pre-wrap">
						{book.description}
					</p>
					<div className="text-xl font-medium">{book.price}</div>

					<a
						href="https://www.instagram.com/bksbksbksbooks/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center w-full md:max-w-xs bg-white text-black py-4 text-sm font-medium hover:bg-gray-200 transition-colors mt-8"
					>
						DM on IG
					</a>
				</div>
			</div>
		</div>
	);
}
