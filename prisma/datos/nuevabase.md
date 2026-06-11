Post	id	text	NO	
Post	title	text	NO	
Post	content	text	YES	
Post	published	boolean	NO	false
Post	authorId	text	NO	
Post	createdAt	timestamp without time zone	NO	CURRENT_TIMESTAMP
Post	updatedAt	timestamp without time zone	NO	
PriceRange	id	integer	NO	nextval('"PriceRange_id_seq"'::regclass)
PriceRange	serviceType	USER-DEFINED	NO	
PriceRange	distanciaMinKm	numeric	NO	
PriceRange	distanciaMaxKm	numeric	NO	
PriceRange	precioRango	numeric	NO	
PriceRange	isActive	boolean	NO	true
PriceRange	createdAt	timestamp without time zone	NO	CURRENT_TIMESTAMP
PriceRange	updatedAt	timestamp without time zone	NO	
SocialPost	id	integer	NO	nextval('"SocialPost_id_seq"'::regclass)
SocialPost	platform	USER-DEFINED	NO	
SocialPost	userName	text	NO	'Envios DosRuedas'::text
SocialPost	userAvatar	text	YES	'/LogoEnviosDosRuedas.webp'::text
SocialPost	userUrl	text	YES	
SocialPost	content	text	NO	
SocialPost	postUrl	text	NO	
SocialPost	imageUrl	text	YES	
SocialPost	imageHint	text	YES	
SocialPost	likes	integer	YES	(floor((random() * (100)::double precision)))::integer
SocialPost	comments	integer	YES	(floor((random() * (50)::double precision)))::integer
SocialPost	shares	integer	YES	(floor((random() * (20)::double precision)))::integer
SocialPost	timestamp	timestamp without time zone	NO	CURRENT_TIMESTAMP
User	id	text	NO	
User	email	text	NO	
User	name	text	YES	
User	createdAt	timestamp without time zone	NO	CURRENT_TIMESTAMP
User	updatedAt	timestamp without time zone	NO	
