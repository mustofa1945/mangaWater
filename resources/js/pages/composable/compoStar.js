import { ref } from 'vue'
import { useUtils } from '../utils/utilsFunctionStore'

export const useCompoStar = () => {
    let scor = ref(2)

    let grade = ref("by 1,094 reviews")

    const { regular, solid } = {
        regular: "fa-regular",
        solid: "fa-solid",
    }


    const dataStar = ref([
        {
            id: 1,
            title: "Very Bad",
            status: true,
            icon: solid,
            scor: 2,
            scale: "scale-125"
        },
        {
            id: 2,
            title: "Bad",
            status: false,
            icon: regular,
            scor: 4,
            scale: "scale-100"
        },
        {
            id: 3,
            title: "Okay",
            status: false,
            icon: regular,
            scor: 6,
            scale: "scale-100"
        },
        {
            id: 4,
            title: "Good",
            status: false,
            icon: regular,
            scor: 8,
            scale: "scale-100"
        },
        {
            id: 5,
            title: "Excellent",
            status: false,
            icon: regular,
            scor: 10,
            scale: "scale-100"
        }
    ])

    const delay = (time) => new Promise((resolve) => setTimeout(resolve, time))

    const onOverHoverStar = async (id) => {
        const star = dataStar.value.find(el => el.id === id)

        scor.value = star.scor
        grade.value = star.title

        if (!star.status) {
            for (let index = 0; index < star.id; index++) {
                await delay(30)
                dataStar.value[index].status = true
                dataStar.value[index].icon = solid
                dataStar.value[index].scale = "scale-125"
            }
        } else {
            for (let index = 5; index > star.id; index--) {
                await delay(30)
                dataStar.value[index - 1].status = false
                dataStar.value[index - 1].icon = regular
                dataStar.value[index - 1].scale = 'scale-100'
            }
        }

    }

    const reset = () => grade.value = "by 1,094 reviews"
    

    return { dataStar, scor, onOverHoverStar , grade , reset }
}