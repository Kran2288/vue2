var n = new Vue({
    el: '#vue',
    data: {
        message: 'Подкинули, Закинули v-bind)',
        name: '',
        surname: '',
        counter: 0,
        students: []
    },
    methods: {
        onSubmit() {
            this.students.push({
                'sName': this.name + ' ' + this.surname,
            })
        }
    }
})