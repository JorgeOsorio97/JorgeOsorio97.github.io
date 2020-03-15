// Models
import { ProjectModel, CategoryModel } from './models/project.model'

// Assets
import turisfon from './assets/img/turisfon.png'

const categories = {
    data_science: new CategoryModel(
        'Ciencia de Datos y Estadistica',
        'catDS'
    ),
    web: new CategoryModel(
        'Desarrollo Web',
        'catWeb'
    ),
    mobile: new CategoryModel(
        'Desarrollo Mobil',
        'catMobil'
    )
}

const projects = [
    new ProjectModel(
        'Análisis jugadores FIFA19',
        turisfon,
        null,
        categories.data_science
    ),
    new ProjectModel(
        'Muevetec',
        turisfon,
        null,
        categories.web
    ),
    new ProjectModel(
        'Publifon App',
        turisfon,
        null,
        categories.mobile
    )
]

export {categories, projects}