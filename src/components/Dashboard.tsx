import React, {useEffect, useState} from 'react'
import axios from 'axios'


export default function Dashboard(){
const [assets, setAssets] = useState<any[]>([])
useEffect(()=>{axios.get('/v1/assets/').then(r=>setAssets(r.data)).catch(()=>{})},[])
return <div>
