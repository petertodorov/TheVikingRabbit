import React from 'react'
// import speciesList from './species.js'

function FriendsContainer(props) {
    let friendContainer;
    // let speciesList;

    function imageProvider(id) {
        if (props.friendsImages == undefined) {
            let currentImage = props.friendsImages[id]
            return { image: currentImage.image, alt: currentImage.title }
        } else {
            return { image: '', alt: "Ooops, no image available" }
        }

    }

    if (props.friendsData !== undefined) {
        let data = props.friendsData
        // speciesList = props.friendsImages
        let imageComponent
        let counter = 0;

        friendContainer = data.map((species) => {
            const { image, alt } = imageProvider(species.id)
            imageComponent = <img src={image} alt={alt} />
            counter += 1;
            return (
                <article className="friends-article-wrapper" id={species.id} key={species.id}>
                    <section className="friends-article-container">
                        <div className="metadata-wrapper">

                            <div className="metadata-container">
                                <p className="metadata-name"><strong>Name </strong>{species.name}</p>
                                <p className="metadata-class"><strong>Classification </strong>{species.classification}</p>
                            </div>
                            <div className="counter-el">{counter}</div>

                        </div>


                        <div className="friends-image-container">
                            {imageComponent}
                        </div>
                    </section>
                </article>
            )
        })
        return (
            <React.Fragment>
                <h2 className="friends-title">FriendsList</h2>
                {friendContainer}
            </React.Fragment>
        );
    }
}
export default FriendsContainer