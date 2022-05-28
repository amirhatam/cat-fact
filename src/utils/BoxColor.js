
export const randomColor = (props) => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark']

    let newArr = []

    const count = 25 //catsList.length
    const res = Math.round(count / 7)
    for (let i = 0; i < res; i++) {
        newArr.push(...colors)
    }
    props.setBoxColor(newArr)
}

