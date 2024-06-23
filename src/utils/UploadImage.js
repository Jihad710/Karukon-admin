import axios from 'axios'

export const UploadPicture = async (image, name) => {
    // console.log(images);
    const formData = new FormData()
    formData.append('image', image)
    // formData.append("title", "My Vegas Vacation");

    // for (const [i, photo] of Array.from(images.files).entries()) {
    //   formData.append(`photos_${i}`, photo);
    // }

    const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${`79f21fa129df4c9028a8cefb11b85b9d`}&name=${name}`,
        formData
    )
    console.log(response);
    return response
}
