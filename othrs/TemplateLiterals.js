let titleCase = strings => strings.join().replace(/\b\w/g, match => match.toUpperCase());

titleCase`See mozilla form more information about TEMPLATE STRINGS.`
