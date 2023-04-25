import React from "react";

export const ItemListContainer = ({ page, path }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={path}>
        {page}
      </a>
    </li>
  );
};

export const ItemDropdownContainer = ({ page }) => {
  return (
    <li className="nav-item dropdown">
      <button
        type="button"
        class="nav-link dropdown-toggle border-0 bg-transparent"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {page}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="/">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Another action
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Something else here
          </a>
        </li>
      </ul>
    </li>
  );
};
