import React from "react";

function Children() {
  return (
    <div>
      <div className="w-[269px] bg-[color:var(--color2)] flex items-center justify-between gap-4 h-full pr-8">
        <span className="text-slate-400 px-[44px] py-4">Children</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="children-input"
            class="hover:bg-[color:var(--color3op)] rounded-full p-2 focus:ring-1 focus:ring-[color:var(--color1)]"
            
          >
            <svg
              class="w-2 h-2 text-[color:var(--color1)]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            id="children-input"
            data-input-counter
            data-input-counter-min="0"
            className="bg-[color:var(--color2)] border-none outline-none text-center text-md w-10 text-[color:var(--color1)] focus:outline-none focus:ring-0"
            placeholder=""
            value="0"
            required
          />
          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="children-input"
            className="hover:bg-[color:var(--color3op)] rounded-full p-2 focus:ring-1 focus:ring-[color:var(--color1)]"
          >
            <svg
              class="w-2 h-2 text-[color:var(--color1)]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Children;
