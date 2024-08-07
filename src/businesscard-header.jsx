import '/Users/davidobaro/1st-React-proj/src/businesscard.css';

function BusinessCardHeader() {
	return (
		<header className='header-box'>
			<div>
				<h1>David Obaro</h1>
				<h3 className='career-name'> Quality Engineer</h3>
				<p className='email-text'>daveobaro8@gmail.com</p>
			</div>
			<div>
				<a className='button-container' href='mailto:Daveobaro8@gmail.com'>
					<p>
						<i class='fa-solid fa-envelope'></i> Email
					</p>
				</a>
			</div>
		</header>
	);
}

export default BusinessCardHeader;
