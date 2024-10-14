import GalleryItem from "../models/galleryItem.js"

//create Gallery Item
export function createGalleryItem(req,res){
    const galleryItems = req.body

    const newGalleryItems = new GalleryItem(galleryItems)

    newGalleryItems.save().then(
        ()=>{
            res.json({
                message : "gallery Item created successfully"
            })
        }
    ).catch(
        ()=>{
            res.status(500).json({
                message :"faild"
            })
        }
    )     
    
} 

export function getGalleryItems(req,res){

    GalleryItem.find().then(
      (list)=>{
        res.json({
          list : list
        })
      }
    )
  }