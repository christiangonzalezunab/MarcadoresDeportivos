const express=require('express')
const routes=express.Router()

///  route for select  ------------------------------------------
routes.get('/:table',(req,res)=>{
   //res.send('Ahora si viene el sel')
   req.getConnection((err,conn)=>{
    
    if(err) return res.send(err)

    var ssql='select * from '+req.params.table
    
    conn.query(ssql,(err,rows)=>{
        if(err) return res.send(err)

        res.json(rows)
    })

   })
})

/// route for insert -------------------------------------------
routes.post('/:table',(req,res)=>{
    //res.send('Ahora si viene el sel')
    req.getConnection((err,conn)=>{
     
     if(err) return res.send(err)
     var ssql = 'INSERT INTO '+ req.params.table+' set ?'
     conn.query(ssql,[req.body],(err,rows)=>{
         if(err) return res.send(err)
 
         res.send('Add OK!')
     })
 
    })
 })

 //// route for delete
 routes.delete('/:table/:field/:id',(req,res)=>{
    
    req.getConnection((err,conn)=>{
     
     if(err) return res.send(err)
     var ssql ='DELETE FROM '+req.params.table+' WHERE '+req.params.field+' = ?'
     conn.query(ssql,[req.params.id],(err,rows)=>{
         if(err) return res.send(err)
 
         res.send('Book delete OK!')
     })
 
    })
 })

 // route for update
 routes.put('/:table/:field/:id',(req,res)=>{
    
    req.getConnection((err,conn)=>{
     
     if(err) return res.send(err)
     var ssql = 'UPDATE '+req.params.table+' set ? WHERE '+req.params.field+' = ?'
     conn.query(ssql,[req.body,req.params.id],(err,rows)=>{
         if(err) return res.send(err)
 
         res.send('Book UPDATED OK!')
     })
 
    })
 })





module.exports=routes