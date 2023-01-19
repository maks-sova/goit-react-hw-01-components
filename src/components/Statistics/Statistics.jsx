import PropTypes from "prop-types";
import css from "./Statistics.module.css";




export default function Statistics({ title, stats }){
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            
            <ul className={css.stat_list}>
                {stats.map(item => (
                    <li
                        key={item.id}
                        style={{
                            backgroundColor:
                            '#' + (((1 <<24 ) *Math.random()) |0).toString(16),
                        }}
                        className={css.item}>
                        <span className={css.label}>{item.label}</span>
                        <span className={css.percentage}>{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
      
Statistics.propTypes = {
    title: PropTypes.string,
    stats:PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage:PropTypes.number,
        })
    ).isRequired
}



