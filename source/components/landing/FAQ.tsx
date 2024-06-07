import QSet from "./QSet"

const FAQ = ({ faqs }: { faqs: any[] }) => {
	return (
		<section id="faq" className="flex w-full justify-between px-6 sm:px-8 lg:px-11 pt-20 pb-20 flex-col">
			<div className="flex-1 flex flex-col items-center justify-between w-full pb-10">
				<div className="flex flex-col gap-4 w-full text-center">
					<h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium mb-10 text-center">Frequently Asked <span className="text-highlight">Questions</span></h2>
				</div>
			</div>
			<div className="w-full flex flex-col gap-8">
				{faqs.map((faq: any, i) => <QSet key={faq._id} i={i} faq={faq} />)}
				{faqs.length === 0 && <div className="pb-8 font-playfair uppercase w-full text-2xl">There are no FAQs at the moment</div>}
			</div>
		</section>
	)
}

export default FAQ