import { Popover as ChakraPopover, Portal } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

interface PopoverContentProps extends ChakraPopover.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(function PopoverContent(
    props,
    ref
) {
    const { portalled = false, portalRef, ...rest } = props;
    return (
        <Portal disabled={!portalled} container={portalRef}>
            <ChakraPopover.Positioner>
                <ChakraPopover.Content data-e2e-id="popover-content" ref={ref} {...rest} />
            </ChakraPopover.Positioner>
        </Portal>
    );
});

export const PopoverArrow = forwardRef<HTMLDivElement, ChakraPopover.ArrowProps>(function PopoverArrow(
    props,
    ref
) {
    return (
        <ChakraPopover.Arrow {...props} ref={ref}>
            <ChakraPopover.ArrowTip />
        </ChakraPopover.Arrow>
    );
});

export const PopoverCloseTrigger = forwardRef<HTMLButtonElement, ChakraPopover.CloseTriggerProps>(
    function PopoverCloseTrigger(props, ref) {
        const { children, ...rest } = props;
        return (
            <ChakraPopover.CloseTrigger {...rest} ref={ref} asChild>
                {children}
            </ChakraPopover.CloseTrigger>
        );
    }
);

export const PopoverTitle = ChakraPopover.Title;
export const PopoverDescription = ChakraPopover.Description;
export const PopoverFooter = ChakraPopover.Footer;
export const PopoverHeader = ChakraPopover.Header;
export const PopoverRoot = ChakraPopover.Root;
export const PopoverBody = ChakraPopover.Body;
export const PopoverTrigger = ChakraPopover.Trigger;
