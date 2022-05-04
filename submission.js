import './Form.scss';

function Submission(props) {
    console.log(props.location);
    const success = true;
    return (
        <>
            <HomePage />
            <Modal className="Modal" dialogClassName="modal-95w" show={true} size="lg">
                <Modal.Body className="submission-modal-body">
                    <figure className="submission-figure">
                        <img src={process.env.PUBLIC_URL + '/icons/submission.svg'} alt="form-submission" className="figure-img" />
                        <figcaption className='figure-caption'>Your submission has been submitted successfully!</figcaption>
                    </figure>
                    {props.location.isError ?
                        <figure className="submission-figure">
                            <img src={process.env.PUBLIC_URL + '/icons/submission.svg'} alt="form-submission" className="figure-img" />
                            <figcaption className='figure-caption'>Your submission has been submitted successfully!</figcaption>
                        </figure> :
                        <figure className="submission-figure">
                            <img src={process.env.PUBLIC_URL + '/icons/error.svg'} alt="form-submission" className="figure-img" />
                            <figcaption className='figure-caption'>Your submission failed!Reason: {props.location.state.detail}</figcaption>
                        </figure>}

                    <a href="/tcocomparisoncalculator" className="back-link">Back to TCO comparison calculator</a>
                </Modal.Body>
            </Modal>
        </>
    );
} 