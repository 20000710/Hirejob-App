import React from 'react'
import DetailMain from '../../components/detail-main/detailMain';
import axios from 'axios';


export async function getServerSideProps(ctx) { 
    const id = ctx.params.id;
    const {cookies} = ctx.req
    const token = cookies.token
    
    const resWorker = await axios.get(process.env.API_BACKEND + "workers/" + id, {
      headers: {
        token: token
      }
    })

    return {
        props: {
          worker: resWorker.data.data,
          experience: resWorker.data.experience,
          portfolio: resWorker.data.portfolio,
          token: token
        }
      }
}

const ProfileDetail = ({worker, experience, portfolio, token}) => {
  
  // const dispatch = useDispatch()
  // const {workerDetail} = useSelector(state => state.profile)
  
  // console.log('workerDetail: ', workerDetail);
  // console.log('id: ', id);
  // useEffect(() => {
  //   dispatch(getDetailWorker(id, token))
  // },[])
  return (
    <div>
      <DetailMain 
        worker={worker}
        experience={experience}
        portfolio={portfolio}
      />
    </div>
  )
}

export default ProfileDetail