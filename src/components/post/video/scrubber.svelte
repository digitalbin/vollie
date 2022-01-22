<script>
    export let onChangeEnd;
    export let _value = 0;
    let value = 0;
    let isScrubbing = false;

	const handleChange = (e) => {
        value = e.target.value
        isScrubbing = false;
        onChangeEnd(value);
    };

	const handlePointer = (e) => {
		const { type, target } = e;
		if (type === 'pointerdown') isScrubbing = true;
	};

    $: {
        if (!isScrubbing) value = _value;
    }
</script>

<div>
	<progress {value} />
	<input
		on:change={handleChange}
		on:pointerdown={handlePointer}
		{value}
		type="range"
		min="0"
		max="1"
		step="0.01"
		aria-label="Time scrubber"
	/>
</div>

<style>
	div {
		@apply flex-1 flex items-center relative;
	}
	progress {
		@apply appearance-none
            rounded
            w-full
            pointer-events-none
            absolute;
		height: 2px;
	}

	progress::-webkit-progress-bar {
		/* background-color: transparent;
    border-radius: 2px; */
		@apply rounded;
	}

	progress::-webkit-progress-value {
		@apply bg-primary rounded;
	}

	progress::-moz-progress-bar {
		/* border: 1px solid #6bff5c; */
		/* border: none; */
		/* background: #6bff5c; */
		@apply bg-primary;
	}

	input {
		--thumb-size: 10px;

		width: 100%;
		margin: 4px 0;
		background-color: transparent;
		-webkit-appearance: none;
	}
	input:focus {
		outline: none;
	}
	input::-webkit-slider-runnable-track {
		background: rgba(255, 255, 255, 0.5);
		border: 0px solid rgba(0, 0, 0, 0);
		border: 0;
		border-radius: 2px;
		width: 100%;
		height: 2px;
		cursor: pointer;
	}
	input::-webkit-slider-thumb {
		margin-top: -4px;
		z-index: 1;
		position: relative;
		width: var(--thumb-size);
		height: var(--thumb-size);
		background: #ffffff;
		border: 0px solid rgba(0, 0, 0, 0);
		border: 0;
		border-radius: 100px;
		cursor: pointer;
		-webkit-appearance: none;
	}
	input:focus::-webkit-slider-runnable-track {
		background: rgba(255, 255, 255, 0.5);
	}
	input::-moz-range-track {
		background: rgba(255, 255, 255, 0.5);
		border: 0px solid rgba(0, 0, 0, 0);
		border: 0;
		border-radius: 2px;
		width: 100%;
		height: 2px;
		cursor: pointer;
	}
	input::-moz-range-thumb {
		width: var(--thumb-size);
		height: var(--thumb-size);
		background: #ffffff;
		border: 0px solid rgba(0, 0, 0, 0);
		border: 0;
		border-radius: 100px;
		cursor: pointer;
	}
	input::-ms-track {
		background: transparent;
		border-color: transparent;
		border-width: 4px 0;
		color: transparent;
		width: 100%;
		height: 2px;
		cursor: pointer;
	}
	input::-ms-fill-lower {
		background: #6bff5c;
		border: 0px solid rgba(0, 0, 0, 0);
		border: 0;
		border-radius: 4px;
	}
	input::-ms-fill-upper {
		background: rgba(255, 255, 255, 0.5);
		border: 0px solid rgba(0, 0, 0, 0);
		border: 0;
		border-radius: 4px;
	}
	input::-ms-thumb {
		width: var(--thumb-size);
		height: var(--thumb-size);
		background: #ffffff;
		border: 0px solid rgba(0, 0, 0, 0);
		border: 0;
		border-radius: 100px;
		cursor: pointer;
		margin-top: 0px;
		/*Needed to keep the Edge thumb centred*/
	}
	input:focus::-ms-fill-lower {
		background: rgba(255, 255, 255, 0.5);
	}
	input:focus::-ms-fill-upper {
		background: rgba(255, 255, 255, 0.5);
	}
	/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
  how to remove the virtical space around the range input in IE*/
	@supports (-ms-ime-align: auto) {
		/* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
		input {
			margin: 0;
			/*Edge starts the margin from the thumb, not the track as other browsers do*/
		}
	}
</style>
