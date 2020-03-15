class ProjectModel{
    constructor(_title, _image, _imageAlt ,_category){
        this.title = _title;
        this.image = _image;
        this.imageAlt = _imageAlt;
        this.category = _category;
    }
}

class CategoryModel{
    constructor(_name, _type){
        this.name = _name;
        this.type = _type;
    }
}

export {ProjectModel, CategoryModel}