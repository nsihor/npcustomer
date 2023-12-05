const AccordionWrapper = ({children, id, title}) => {
    return <div className='accordion-item'>
        <h2 className='accordion-header' id={title.id}>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                    data-bs-target={`#${id}`} aria-expanded='false'
                    aria-controls={id}>
                {title.text}
            </button>
        </h2>
        <div id={id} className='accordion-collapse collapse'
             aria-labelledby={title.id} data-bs-parent='#accordionProfile'>
            <div className='accordion-body mb-3 pt-0'>
                {children}
            </div>
        </div>
        <hr/>
    </div>
}

export default AccordionWrapper;