import BusinessCardImage from '/Users/davidobaro/1st-React-proj/src/businesscard-image.jsx';
import BusinessCardHeader from '/Users/davidobaro/1st-React-proj/src/businesscard-header.jsx';
import BusinessCardBody from '/Users/davidobaro/1st-React-proj/src/businesscard-body.jsx';
import BusinessCardFooter from '/Users/davidobaro/1st-React-proj/src/businesscard-footer.jsx';
import '/Users/davidobaro/1st-React-proj/src/businesscard.css';

function BusinessCardApp() {
	return (
		<div className='card-body'>
			<BusinessCardImage />
			<BusinessCardHeader />
			<BusinessCardBody />
			<BusinessCardFooter />
		</div>
	);
}

export default BusinessCardApp;
