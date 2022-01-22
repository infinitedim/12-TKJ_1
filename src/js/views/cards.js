const cards = (student) => {
    return /*html*/ `<div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="${student.photo_picture}" alt="Card image cap">
                            <div class="card-body">
                            <h1>${student.name}</h1>
                                <p class="card-text">${student.quotes}</p>
                            </div>
                        </div>
                    </div>`;
};

export default cards;
