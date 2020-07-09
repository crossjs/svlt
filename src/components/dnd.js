function clamp(v, min, max) {
  return Math.min(Math.max(min, v), max);
}

// function valueToPercent(value, min, max) {
//   return ((value - min) * 100) / (max - min);
// }

// function percentToValue(percent, min, max) {
//   return (max - min) * percent + min;
// }

function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const mantissaDecimalPart = parts[0].split('.')[1];
    return (
      (mantissaDecimalPart ? mantissaDecimalPart.length : 0) +
      parseInt(parts[1], 10)
    );
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

export const draggable = (
  node,
  { axis = 'x', value, step, min, max, disabled } = {},
) => {
  if (disabled) {
    return;
  }
  const axisX = axis === 'x';
  const axisY = axis === 'y';

  const minX = 0;
  const maxX = node.parentNode.clientWidth - node.clientWidth;
  const minY = 0;
  const maxY = node.parentNode.clientHeight - node.clientHeight;

  let dragging = false;

  let offsetX = 0;
  let offsetY = 0;

  let startX = 0;
  let startY = 0;

  function update(value, dispatch) {
    if (dispatch || !dragging) {
      if (axisX) {
        node.style.left = `${(value / (max - min)) * (maxX - minX) + minX}px`;
      } else if (axisY) {
        node.style.top = `${(value / (max - min)) * (maxY - minY) + minY}px`;
      }
      if (dispatch) {
        node.dispatchEvent(new CustomEvent('valueChange', { detail: value }));
      }
    }
  }

  update(roundValueToStep(value, step, min));

  function register() {
    node.removeEventListener('mousedown', handleStart);
    node.addEventListener('mousedown', handleStart);
  }

  register();

  function handleStart(e) {
    if (axisX) {
      offsetX = e.target.offsetLeft;
      startX = e.clientX;
    } else if (axisY) {
      offsetY = e.target.offsetTop;
      startY = e.clientY;
    }

    node.ownerDocument.addEventListener('mousemove', handleDrag);
    node.ownerDocument.addEventListener('mouseup', handleEnd);

    dragging = true;
  }

  function handleDrag(e) {
    if (dragging) {
      if (axisX) {
        offsetX += e.clientX - startX;
        startX = e.clientX;
        offsetX = clamp(offsetX, minX, maxX);
        update(
          roundValueToStep(
            (offsetX / (maxX - minX)) * (max - min) + min,
            step,
            min,
          ),
          true,
        );
      } else if (axisY) {
        offsetY += e.clientY - startY;
        startY = e.clientY;
        offsetY = clamp(offsetY, minY, maxY);
        update(
          roundValueToStep(
            (offsetY / (maxY - minY)) * (max - min) + min,
            step,
            min,
          ),
          true,
        );
      }
    }
  }

  function handleEnd() {
    if (dragging) {
      dragging = false;
      node.ownerDocument.removeEventListener('mousemove', handleDrag);
      node.ownerDocument.removeEventListener('mouseup', handleEnd);
    }
  }

  function destroy() {
    node.removeEventListener('mousedown', handleStart);
  }

  return {
    update({ value, disabled }) {
      if (disabled) {
        node.removeEventListener('mousedown', handleStart);
        handleEnd();
        destroy();
      } else {
        update(value);
        register();
      }
    },
    destroy,
  };
};
