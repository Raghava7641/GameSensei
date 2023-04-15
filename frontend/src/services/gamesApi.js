import axios from 'axios'

const sampleApiCall = async () => {
  try {
    const { data } = await axios.get('http://localhost:7077/')
    console.log('sample call succcessful', data)

    return data
  } catch (error) {
    console.log('Error occured!', error)
  }
}

export { sampleApiCall }
