import Axios from '../utils/axios'

const MAX_PER_PAGE = 10

class NewsClass {
    constructor(category) {
        this._currentPage = 1
        this._totalPages = 1
        this._category = category
        this._pageSize = MAX_PER_PAGE
        this._search = ''
    }

    async getNews() {
        try {
            const { data } = await Axios.get(this._getUrl())
            this._totalPages = Math.ceil(data.totalResults / this._pageSize)
            return {
                data: data.articles,
                totalResults: data.totalResults,
                category: this._category,
                totalPages: this._totalPages,
                currentPage: this._currentPage,
                isPrevPage: this.prevPage(),
                isNextPage: this.nextPage()
            }
        } catch (e) {
            throw new Error(e)
        }
    }

    changeCategory(category) {
        this._category = category
        this._currentPage = 1
        return this.getNews()
    }

    nextPage() {
        if (this._currentPage < this._totalPages) {
            this._currentPage++
            return this.getNews()
        }
        return false
    }

    prevPage() {
        if ( this._isPrevious()) {
            this._currentPage--
            return this.getNews()
        }
        return false

    }

    jumpPage(value) {
        this._currentPage = value
        return this.getNews()
    }

    _getUrl() {
        let url = '/?'

        if (this._category) url += `category=${this._category}`
        if (this._pageSize) url += `&pageSize=${this._pageSize}`
        if (this._currentPage) url += `&page=${this._currentPage}`
        if (this._search) url += `&q=${this._search}`

        return url
    }

    // _isNext() {
    //     return this._currentPage < this._totalPages
    // }

    _isPrevious() {
        return this._currentPage > 1
    }
}

export default NewsClass
