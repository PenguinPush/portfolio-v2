import React from 'react';

export default function Projects({}) {
  const diamondListClass =
    'group ease-out-back diamond-list-decoration relative pr-2 transition duration-300 hover:translate-x-1 active:translate-x-1 md:pr-4';

  const arrowListClass =
    'group ease-out-back arrow-list-decoration relative translate-x-4 transition duration-300 hover:translate-x-5 active:translate-x-5';

  const dupe = [...Array(17)];

  return (
    <div className="p-2">
      <ul className="list-none space-y-1 pl-4 leading-relaxed md:pl-8">
        {dupe.map(() => (
          <li key="" className={diamondListClass}>
            yo this projects page is lowkey really under construction
          </li>
        ))}
      </ul>
    </div>
  );
}
