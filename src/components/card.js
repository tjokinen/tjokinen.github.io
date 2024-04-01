export default function Card({ organization, iconClassName, title, date, description, children, disableIcon = false }) {

  const newDesc = description.split('\n').map((str, i) => <p key={i} className="text-base col-span-8">{str}</p>);

  return (
    <div className="grid grid-cols-8 text-4xl">
      <p className="text-base col-span-8">{organization}</p>
      {!disableIcon ? <i className={iconClassName}></i> : <></>}
      <p className="text-xl col-span-7">{title}</p>
      <p className="text-xs col-span-8">{date}</p>
      {newDesc}
      {children}
    </div>
  )
}
