import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import { Theme } from '../styles/theme'

const BlogCard = ({
    blog
}) => {
    return (
        <div className="col-lg-6 col-md-6 hh14-text margin-bottom" style={{marginBottom: 20}}>
            <div style={{paddingBottom: 20, borderColor: '#efefef', borderStyle: 'solid', borderWidth: 1, borderRadius: 10, overflow: 'hidden', height: '100%'}}>
            <img src={blog.frontmatter.image} alt="product" style={{width: '100%', height: 200, objectFit: 'cover'}} />
                    <div style={{paddingLeft: 20, paddingRight: 20}}>
                        <Link to={blog.fields.slug}><h4 style={{marginBottom: 0}}>{blog.frontmatter.title}</h4></Link>
                        <span style={{color: Theme.secondaryColor}}>
                            <i aria-label='Date' className='fas fa-calendar' style={{marginRight: 10}} />
                            {moment(blog.frontmatter.date).format('MMM, D YYYY')}
                            <span style={{fontWeight: 'bold', marginLeft: 10, marginRight: 10, fontSize: '2em'}}>&middot;</span>
                            <span>{blog.timeToRead} min read</span>
                        </span>
                        <p className="para mt-3">{blog.excerpt}</p>
                        <Link to={blog.fields.slug}>Continue Reading</Link>
                    </div>
                    
                </div>
        </div>
    )
}

export default BlogCard