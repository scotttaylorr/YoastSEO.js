import Paper from "../../js/values/Paper";

/**
 * A factory for changing the paper on a living researcher. Niceness around `researcher.setPaper`.
 *
 * @param {Researcher} researcher The researcher to update the paper for.
 * @returns {function(object)} An updater function that accepts arguments for a paper.
 */
export default function( researcher ) {
	return ( { text, locale } ) => {
		let paper = new Paper(
			text,
			{
				locale,
			}
		);

		researcher.setPaper( paper );

		return paper;
	};
};
