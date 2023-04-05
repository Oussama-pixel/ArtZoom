import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_files_action } from '../../state/actions/FilesAction'
import "./element.scss"

export default function Element({type,item}) {
    const [name, setName] = useState(item.name)
    const [description, setDescription] = useState(new DOMParser().parseFromString(item.description,"text/html").body.innerText)
    const [image, setImage] = useState()
    const admin = useSelector(state=>state.admin);
    const dispatch = useDispatch();

    const changeImg = (e)=>{
        imageRef.current.src = URL.createObjectURL(e.target.files[0]);
        setImage(e.target.files[0])
    }

    console.log(image)
    const update_data = ()=>{
        let data = new FormData();
        
        data.append("picture",image)
        data.append("name",name)
        data.append("description",description)
        data.append("types",image.name.includes("MOV")||image.name.includes("mp4")?["mov","mp4"]:["jpg","jpeg","png"])
        data.append("type",type.includes("service-")?'services':"products")
        data.append("table",type.includes("service-")?'services':"products");
        data.append("id",item.id)

        dispatch(set_files_action(data,admin.data.token))
    }
    const fileInputRef = useRef()
    const imageRef = useRef();
  return (
    <div className='element-container'>
        <div className="element-content">
            <input type="file" name="new-file" accept='image/* ,video/*' onChange={e=>changeImg(e)} ref={ref=>ref!==null&&(fileInputRef.current = ref)} style={{display:"none"}} id="" />
            <div className="image" onClick={()=>fileInputRef.current.click()}>
                {item.image.includes("MOV")||item.image.includes("mp4")?(
                    <video src={item.image} controls ref={ref=>ref!==null&&(imageRef.current=ref)}></video>
                ):(
                    <img src={item.image} alt="" ref={ref=>ref!==null&&(imageRef.current=ref)}/>
                )}
            </div>
            <div className="info">
                <p className="name">
                    {item.name}
                </p>
                {description!=="undefined"&&(
                    <p className="description">
                        {description}
                    </p>
                )}
            </div>
            {type.includes("service-")&&(
                <div className="services-container">
                    <div className="change-name">
                        <input type="text" defaultValue={name} onChange={e=>setName(e.target.value)} name="change-name" id="" />
                    </div>

                    <div className="change-description">
                        <textarea name="change-description" defaultValue={description} onChange={e=>setDescription(e.target.value)} id="" cols="50" rows="10"></textarea>
                    </div>
                </div>
            )}
            <div className="modifier">
                <button className="modifier-button"onClick={()=>update_data()}>
                    Modifier
                </button>
            </div>
        </div>

    </div>
  )
}
