import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';

export default function CustomTabBar({state, descriptors, navigation}) {
    const windowWidth = useWindowDimensions().width;

    return (
        <View style={[styles.container, {width: windowWidth}]}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                const image =
                    options.title === "Home"
                        ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAApxJREFUSEu1ldtuElEUhtfaESpX8Ab6Bp0mLRQoMKOJaYymktp6qJqqD6CPolcmGrVWrEVTicfbGS2HOZgIj8AbtFfaprDM7A1spjMD9KJcsvf6v/Wvwx6EU/7hKevDxABF1xNTcKgDIcQwohmatjdJchMBFL2SmMKYDgQKAgIRNieFjAVwcRbtibMWEQACmyaCZgyjY52MBAhxpgMwBYm1/tGhmgCAv3DWEJDxTkIBQhx1AlAQWeug01GbWpHXXdUrCQkZ7SQQwMUjpBOvOWsfHJHSF+83NqN/VzrAXCfxUeXyAVzxaOTInRa3oftdxlQnW2wGTYyEYFyUy98THyBZKxsAWODiQKqTXQ0UD3IChIZ54ZI2nIwHMFffegKEjxDYPgGOFfdDME5deGpdXHzcPzsGeEcIDIi6M052bWTmx0vWK9cfd09MbXGg6wU0SuRuqpNZG/yfrJabAGxaCDJwz3vLBkjYtApLM31YyvhBQACWdjkM8JaH2+k7ElAv8yCfuPvKEIKVvza4mzK+8QqYahjA3ORiTvreIGiu9l5Aszc9bpO7O1zMyhUl4OdXXgFLvRLiwNwgN1NnXgKSjS0eZGdueQCp6g65z4adWx4CfOEPiVW4GgKwXosezK9LB/USz9TO3PY6qH7kYvbCdQn49Vn0oLAUBnjFg5zUfdkDs8QzdYb64nYkWfsgnC2sDAEqvAJWPgxgvyQihN+pB9JBY1NA03e9DmrbXMzOrkrA7iceb+dlXzxBs/YLXg4n+VACrDe9ssm+cAf1beEge0O6DWi8F+A83wPCuFg2/u7DYET5x0+M5mAPhs/lKLft3PL5wE2edZ6pDM5sdAHOecQpWNyXBGGbEaybuRUjEDDJN/akd3yv6UkFxt3/D25dRShgsA+8AAAAAElFTkSuQmCC"
                        : options.title === "Chat"
                        ? " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAApxJREFUSEvFlVtu2lAQhv//KOpr6QogK2j6UIyU4JgVYCcLCNkBrKDpCsIOSN5D7K4gxhAJOw9hByU7II+9cKY6xlBuIVApql8s64znm/nncog3fvjG/rERcHDn594pqZLKFYhDMCeA+WkIIBRhmBxXrzcF+SKgGPkugRbIHEQAEsi8L7zBoUA3EtsL1oHWAkqRf6WBs9Sn4IkKTf5C0K94JnJ8vvcP1BgOwLoAeeNEg80Hu9pYhqwAUufEWXogaMS219wkgdXz69C8TIWDXMW2ez5vvwAoRX5NQ1okjXmlX/bCbZrAZMQxH1MExJuXawZIC7on300hQd2Ij043Rr4Mnstk9GOs9wcVb2RsZoDPkV9TlJYAT0n5pLBN5CuQKBiamijIed/2rhYAVu82EEFVCWeHu0KMxEK2IPIttj13AVDstocE81rx08OhN9jV+bS7slqMYtv9sJyBmHZPyicz2YpdPyQocdmtGOPXvo2N1Q3EzElsmzGaq0Gx2xbTO/EC4DY0xol94kwAm79Tm8if+FkGWL3boYjk1W+1Px2oXWVKB1DzEYLn2HZzixn0bgKKqoKyc4tOAzGtKhqXgOokdjXNeqZ36d6vaa1bUOwkhxNJdn2syB+CzFPWtOkkPf0oQCcpn+4MsCK/DuJSBM8/xyisDFoxunFB+v+SQanrOwLcpVtWoREf/d1fcy3ZviDxRQRfk/LpxbbyWFG7DioTORRw3be92tplV7xvh9A4JtEUwYikI5ACwSGEgVboTAcwi/ijUOoUFtLAZdX50hzcjEC+N2lm98BkAaedQLMls3e2mLMOMZoDrL164Vi99kAEBSgMoBFCZKAoI6i9gh6LQwVHZHK5mIVIYqA1g4dsqb0k6f+99Lct9Ca7PyvOUygFLPoaAAAAAElFTkSuQmCC"
                        : " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAoFJREFUSEu1lf9OE0EQx2euFKP/4BuAT0CJuV6xHL2iIqlGKwSN0Rh9An0D4A3gfyFV/EUUq42//2ktKb3dmnC+gbwB/4s7ZrfXo9fuSXoJ989mO7vz2Zn5zhThhD88Yf/wX4BVr3hARCx3Y0L3kEz1m0eExGZmtXZ55xjAB5JH2PR17blM9auyu/krkX5ChlS1fDaZEEuGgUUSOIaAQNIFGgAk39NZEYCkVdoRENX6GxFLbv7ySne0IYDZeLtqED5STrsuS2cq2MCp3Bk9cN9Oxlrz4qXHHUgIkG68OQCCEUKaaGVvedbOO5Iv5NM3tSmwap9IQlm+gGb1eyoBtCcjYTOz5yIAWyTTwLOLymF6Z9uTkTB7PqUrslX7qOyuc1XZdTXpiWCLZK751O1Y8s1UvxDJB+Xngvs9gNcEiMAvxANYtc8ka+M6UYDdVyQL3MreiRVBd020NTB3XyqdKNWgXI+kGahGq64uVakIChEpar5Qqgn039F90Ac9+o/oE+Zc0wPM5nPlnk/ejZeiH5V2DXJRAHdT6bo1eS8eoF5RKmS5o9ES7mT3mXoBz7QB6cZ2zfhzmlynkJf783zdS4jhcRBDgGIY4O8QAJ3ymDOnhp1V759dPYCnfgT31e9mc7OGh2eA2wuO2v984sFhchxFEkAkwV9/Mb/RrPp7pUKeK0bUwC0RoAEtqw0Y9EvXyyQHH7OjAKykctjKPIgF0M2ucIrYxgGAMQJy2KUfeoNEYDbKKRRiDwH3mT0/ph92bH1ZAC7JQrebrLvpwv3RHun+uXCfrHB7YVkLUIXkG6tIUCQwRhXEv9zXyf0dvw8CStxeDJwf+5c5SIqizsYq5iDgf4niKCha6nnZAAAAAElFTkSuQmCC"

                const imageFocus =
                    options.title === "Home"
                        ? " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAm1JREFUSEu1lc+K01AUxs+5qSNdOW+gj1ChSTvaoWkcB0VFURkQEUcRcaePoisHFf8PoygOCLpSEmZom/QW7CvMG7hz4Zgj996kSXqTNLOYbkIPp9/vfN89t0E45A8esj5UBtiuu/jnH7lACPUa9Lxe73eV4SoBpDjtu0jYQGAQEk7qRjXIXEDD3V48CnUxuRQXDgAQSEJwrpNSgBRnC4l4KNoFRCBiJ+WQQoASZy4ANpQoAhITk0tx5UR+L3WSC5DiNXCBIBFXYhnxKSSkSd0wcuPSAEJ84cj+NBZdVMWTqUtnkAvRANZgywNi3WkssRip7LV6Ki4A5vmO00uvbwZgDjYfA+BDEURsX2YvIGH01GLKOkLCJ8MzK49iSBYwfEfKvvqRBsk5AyS5spl+3zk71c0C/Dekixon+em1Sd6tNfvfGuxv+CsbG0DgnCsABK9oNmO+dLP0rrR2vsqhkoNH8O3zBYDRS5qNh7dvyeb2zx+EVAMIDXmTh6sdWbd2tmWsaeeBfSEf0Bw915p5+7YCeN9JiAsIkQH+ii3rrd0vmVhFAkH3YgGAP5uxy4C31pNJIwcC4jurqr77OVoMEZPavqB7uQAw3kg1K9vcuquE+h8JSDkQToLupaj+KRoq2aZg+UoxQG2LmkRky817stkcviUEIS7ANRh1rqt6/4MW62j56jxAAhmb95UQf5GcQciAn1LbZQ22tNUOOtcKAeItdSy98+PmA9ncHG/IP4r4oHnrjgIPNqXX1GXbG3XWTuTe5CZ/agOy1wB0PG6IAUWvR8t/n17tPYaw7i/d8HIBVd6xB+0pvaUHFcvr/w8DmzwoZ6etSQAAAABJRU5ErkJggg=="
                        : options.title === "Chat"
                        ? " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAlVJREFUSEvFVl1uEmEUPfdSSXwSV1DcQZsUUhNDGaD+JgLGF5+EJbACXUKf24cBf9LEB4txAWJjZQZMYAfiDuDRJnzXfN90Bj6kFIiNMyGTycA595x77h0I13zQNeNjIcHWl5NEnG8USbgEQZbACRECgQYQbkHQ8gqFxqIiLyVIn34ukYgLcAICEBgX4IDon4UfHpCSWrtQaM4jmkuwe3pSV6CXutYAjKFJwus8MlF04O/na7MkfxHsfvtYV4KVwAM1poi6l89Xp0ksgtTZhwoJaVtM5fq0bblaCQnK03ZFBKah8fOfgefrgWslAh7eJL7TcpyhVhIRpM6OKwR2I6+NznWVcNXL5+sWQfr7sU5B0W7oekoI9Kmd2y/NELwfALQZeD7l9RpKABr6ufu3bYL2OzHgNAEXoW3zJeGeplXE5p7H1NNK1TgW3JP0ZqPr5R4Y+yc9aL81tYep0VcgACDRgDpYGwGgQk8/l5hs4zwOZunNzonnPLQJ0t6bgQhtRiRTSmYneYnojnznUcK2yHObglhxNqLr9ESIv3b2HmdtizpuBYrdiU1698DqybJKSFHVc57YMU113C1or6OdY0d0BSWj32qc7Dtle9DSvlsS4MT03ZrklZXU/MzTg3AfRSna8Y9eE8VeGVus7Xm1kjCiLNTwMuXK3GWX6h61RGgvAL/Y9SsoYXDDu/fMAreavNM9HBLoVuj10koURpBYpZN5vviFk/px2BdBkkB9UWgxNvpKYUgxJDHmLBFlgzkxk/4L4L4Qmt27L0xaLjv+70v/X/zj+APvpFsockvNuwAAAABJRU5ErkJggg=="
                        : " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAmJJREFUSEu1Vm1u00AQnVmL3+UGlBskUtNEpGlqJ6iIgpoIKOIUcIO2Nyg/EV8RH+JDFUVCCAq0BkIbr4MUH4HeoBeoB+2sndjpbisiaimy5Fm/NzPvzTgIZ3zhGePDiQTl7x8jICDpLhVNiVR2diNS8aZnjKt3Tib48YEQBAT1JeO5ys43jvcanhUnFyj4W+fPObAqAFtEOI2KnxAABQCpbATQ2J3j+twfQOwEDXc9W22OoNTd3BAg7hIo6AQ8uZ8CzueJ+L37vaZ7LyXJEcx2Nw8BYIqEU+xX21H553tSGYf1lrlF/jbHpbeIl/wvhTh2BqqSoOldNBP8ess9lXM3GXC2+y5CcEDWlgsmkcv+p4g1chc5rjVB6DUaw4TyFey9IdXTcG5lIvtWdr+S0ipoXLYRvGYJw+rtCQm2CVRFno1g/xX3tF+9MxmB/5mU0EoTowal/Zesgb6UNbWbEnckd21ZHR+3rj4fuFcsBL0XrMEINANmIdVzkCeV7lUbwXOG13OQf8lUUWbIchUFCzaC4Bm7wAjGW8XUnuNDKReuWSoIOuwC1Vmu5Ah5iSGKgXpGJIr96kqUnYnS3lZBHCHH04pk/bqFQD5lDYaZxk5CgAPVNiA14QaCGAbpjlIdkPVlG8ET9oX+HXdJvuc64+yOStsr520E4WP28fiiS0lNYFnS1H3hfNtcwUz48BBBTA2rGK1iY6YmcARxIGvtaeOgzfQfrAGJVWOmaetsczJy33pYu7FmJFAPS78fbRBRC0FcyFo2dUl2CLPCAogDiLET1m4NwU/9ZP6PPwQTLbV/If4LSaojKLiCCDIAAAAASUVORK5CYII="
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[styles.item, {flex: 1}]}
                        key={index}
                    >
                        <Image
                            style={styles.picto}
                            source={{
                                uri: isFocused ? imageFocus : image
                            }}
                        />
                        <Text style={[styles.text, {color: isFocused ? '#34CC98' : '#34CC98'}]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

        flexDirection: 'row',
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#34CC98',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20.00,
        elevation: 24,

        position: 'absolute',
        bottom: 0,
        left:0,
        backgroundColor: 'white',

    },
    item: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    text: {
        fontWeight: '600',
    },
    picto: {
        width: 24,
        height: 24,
    }
});