import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { books, Book, CONTACT_EMAIL } from "../data/books";
import BookDetail from "../components/BookDetail";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const [selectedBook, setSelectedBook] = useState<Book | null>(null);

	return (
		<div className="min-h-screen bg-black text-white pt-16">
			<div className="max-w-[1440px] mx-auto">
				<section className="px-6 mb-12">
					<div className="aspect-[21/9] md:aspect-[24/7] bg-black w-full overflow-hidden">
						<div className="w-full h-full bg-black flex items-center justify-center p-8">
							<div className="relative w-full h-full max-w-lg md:max-w-2xl group cursor-pointer">
								<img
									src="/Images/logo/svg/WHITE.svg"
									alt="Logo"
									className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-90 group-hover:opacity-0"
								/>
								<img
									src="/Images/logo/svg/RED.svg"
									alt="Logo Hovered"
									className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
								/>
							</div>
						</div>
					</div>
				</section>

				<section className="px-6 pb-20">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
						{books.map((book) => (
							<div
								key={book.id}
								className="group cursor-pointer"
								onClick={() => setSelectedBook(book)}
							>
								<div className="aspect-[3/4] bg-neutral-200 mb-4 overflow-hidden">
									<img
										src={book.images[0]}
										alt={book.name}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
								<div className="space-y-1 text-center">
									<h3 className="text-base font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
										{book.name}
									</h3>
									<p className="text-xs text-gray-500 font-light">
										{book.price}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="px-6 py-20 border-t border-white/10 text-center">
					<div className="max-w-2xl mx-auto text-sm text-gray-400 font-light leading-relaxed space-y-4">
						<p>
							BKSBKSBKSbooks is an online bookstore focused, mainly, on rare
							photobooks and out-of-print ones around the world.
						</p>
						<p>
							Art, music, counterculture, historical movements and so on…these
							are just a few of the themes we work on providing to everybody, in
							the best state possible.
							<br />
							We are always on the lookout for items that resonate with our
							vision.
						</p>
						<p>
							Allow us 3-4 days to ship the article.
							<br />
							The cost of shipping is already integrated in the price.
							<br />
							Customs duties, taxes, and any additional fees are not included in
							the item price or shipping costs.
							<br />
							These charges are the responsibility of the buyer.
						</p>
						<p>
							Contact{" "}
							<a
								href={`mailto:${CONTACT_EMAIL}`}
								className="text-white hover:underline"
							>
								{CONTACT_EMAIL}
							</a>{" "}
							for any request/inquiries
						</p>
					</div>
				</section>

				<footer className="px-6 py-10 border-t border-white/10 text-center space-y-2">
					<p className="text-xs text-gray-400 font-light max-w-sm mx-auto leading-relaxed">
						To purchase, contact us, WhatsApp +7 *** ** ** ,<br />
						{CONTACT_EMAIL}
						<br />
						instagram @dadmoscow
					</p>
				</footer>
			</div>

			{selectedBook && (
				<BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />
			)}
		</div>
	);
}
